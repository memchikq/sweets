import { CartItemsType } from "@/components/Cart/types";
import { ProductsResponseSuccess } from ".";

export function checkInvalidData(firstArray:ProductsResponseSuccess,secondArray:CartItemsType[]){
    if(!firstArray) return true

    for (const element of secondArray) {
        const id = element.id;
        const matchingElement = firstArray.find(item => item.id === id);
      
        if (!matchingElement) {
          return true
        }

        if(matchingElement.price !== element.price) return true

        if(element.number < 1 || element.number > 9) return true

        if(isNaN(element.number)) return true
   }
   
   return false
}