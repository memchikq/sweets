import { CartItemsType } from "@/components/Cart/types";
export function calculateTotalPrice(cartItems:CartItemsType[],paymentType:string){
    let total = 0

    for (const element of cartItems) {
        total += element.price * element.number
    }

    if(paymentType === "online") total = total - (total / 100 * 5)

    if(total < 5000) total += 600
    
    return total
}