import {
  Button,
  Group,
  Input,
  Radio,
  Stack,
  Text,
  TextInput,
} from "@mantine/core"
import { FormEvent, useState, FC } from "react"
import { IMaskInput } from "react-imask"
import { CartItemsType } from "./types"
import { OrderResponseSuccess } from "@/utils"
import { useRouter } from "next/navigation"
import { notifications } from "@mantine/notifications"

const Delivery: FC<{ cartItems: CartItemsType[]; closeModal: () => void }> = ({
  cartItems,
  closeModal,
}) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [paymentType, setPaymentType] = useState("local")
  const [phoneNumber, setPhoneNumber] = useState({
    value: "",
    error: false,
    errorMessage: "",
  })
  const [userName, setUserName] = useState({
    value: "",
    error: false,
    errorMessage: "",
  })
  const [city, setCity] = useState({
    value: "",
    error: false,
    errorMessage: "",
  })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    let error = false
    setCity((prev) => ({ ...prev, error: false, errorMessage: "" }))
    setUserName((prev) => ({ ...prev, error: false, errorMessage: "" }))
    setPhoneNumber((prev) => ({ ...prev, error: false, errorMessage: "" }))

    if (phoneNumber.value.length < 16) {
      setPhoneNumber((prev) => ({
        ...prev,
        error: true,
        errorMessage: "Введите полный номер",
      }))
      error = true
    }
    if (userName.value.length < 2) {
      setUserName((prev) => ({
        ...prev,
        error: true,
        errorMessage: "Введите имя",
      }))
      error = true
    }
    if (city.value.length < 2) {
      setCity((prev) => ({
        ...prev,
        error: true,
        errorMessage: "Введите город",
      }))
      error = true
    }

    if (!error && cartItems.length > 0) {
      setLoading(true)
      try {
        const response = await fetch("/api/orders", {
          method: "POST",
          body: JSON.stringify({
            paymentType: paymentType,
            phoneNumber: phoneNumber.value,
            userName: userName.value,
            city: city.value,
            cartItems: cartItems,
          }),
        })
        if (!response.ok) {
          const {message} = await response.json()
          notifications.show({
            message: `${message}`,
            color: "red",
          })
          return
        }

        const { data }: { data: OrderResponseSuccess } = await response.json()
        if (data === null) return
        notifications.show({
          message: `Заказ успешно создан`,
          color: "green",
        })

        if (data[0].typePayment === "online") {
          router.push(`/payment?p=${data[0].url}`)
          closeModal()
          return
        }
        router.prefetch("/orders")
        router.replace("/orders")
        closeModal()
      } catch (e) {
        notifications.show({
          message: `Ошибка`,
          color: "red",
        })
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <Group position="left">
      <Text fz={22}>Доставка:</Text>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Input.Wrapper
          error={phoneNumber.errorMessage}
          id={"1"}
          label="Ваш номер:"
          required
          w="100%"
        >
          <Input
            variant="filled"
            value={phoneNumber.value}
            name="phone"
            required
            onChange={(e) =>
              setPhoneNumber({
                ...phoneNumber,
                value: e.currentTarget?.value.trim(),
              })
            }
            component={IMaskInput}
            mask="+7(000)000-00-00"
            id={"1"}
            placeholder="Номер телефона"
          />
        </Input.Wrapper>

        <TextInput
          w="100%"
          name="name"
          label="Ваше имя"
          error={userName.errorMessage}
          value={userName.value}
          onChange={(e) =>
            setUserName({ ...userName, value: e.currentTarget?.value.trim() })
          }
          required
          variant="filled"
          placeholder="Ваше имя"
        />
        <TextInput
          w="100%"
          name="city"
          label="Ваш город"
          error={city.errorMessage}
          value={city.value}
          onChange={(e) =>
            setCity({ ...city, value: e.currentTarget?.value.trim() })
          }
          required
          variant="filled"
          placeholder="Ваш город"
        />

        <Radio.Group
          w="100%"
          value={paymentType}
          onChange={setPaymentType}
          name="favoriteFramework"
          label="Способ оплаты"
          description="Выберите один из способов оплаты"
          withAsterisk
        >
          <Stack mt="xs">
            <Radio value="local" label="Оплата при получении" />
            <Radio value="online" label="Онлайн оплата" />
          </Stack>
        </Radio.Group>
        <Button
          disabled={loading}
          type="submit"
          w="100%"
          color="yellow"
          size="lg"
        >
          Заказать
        </Button>
      </form>
    </Group>
  )
}

export default Delivery
