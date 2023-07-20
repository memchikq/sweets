import Section from "@/components/Section";
import Home from "@/view/Home"
import { Metadata } from "next";

export const metadata:Metadata = {
  title: 'Sweet Mania - десерты на любой вкус!',
  description:"Самые разнообразные десерты, торты, пироги, печенья",
  keywords: ["Десерт","Десерты","Пирог","Пироги","Печенье","Торт","Торты","Сладости","Купить десерт"]
};

export default function Page() {
  return (
    <main>
      <Section/>
      <Home />
    </main>
  )
}
