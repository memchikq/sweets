import { Button, Group, Input, Radio, Stack, Text, TextInput } from "@mantine/core"
import { useState } from "react";
import { IMaskInput } from "react-imask"

const Delivery = () => {
  const [value, setValue] = useState('local');
  return (
    <Group position="left">
      <Text fz={22}>Доставка:</Text>
      <Input.Wrapper id={"1"} label="Ваш номер:" required w="100%">
        <Input
          variant="filled"
          component={IMaskInput}
          mask="+7 (000) 000-00-00"
          id={"1"}
          placeholder="Номер телефона"
        />
      </Input.Wrapper>

      <TextInput
        w="100%"
        label="Ваше имя"
        required
        variant="filled"
        placeholder="Ваше имя"
      />
       <TextInput
        w="100%"
        label="Ваш город"
        required
        variant="filled"
        placeholder="Ваш город"
      />

      <Radio.Group
      w="100%"
      value={value}
      onChange={setValue}
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
      <Button w="100%" color="yellow" size="lg">Заказать</Button>
    </Group>
  )
}

export default Delivery
