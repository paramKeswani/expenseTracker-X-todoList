import { atom } from "recoil";

export const stateAtom = atom({
    key:"stateAtom" , 
    default :0
})

export const isVisibleAtom = atom({
    key:"isVisibleAtom" , 
    default :false
})

 export const data  = [
    {
        screen : 1,
        money : 50 ,
        happiness : 50 ,
        mcq : "What is your goal?" ,
        ans1:"To Become Rich",
        ans2: "To Become Wealthy",
        exp1 : "Buy cars",
        exp2 : "Buy shares" ,
        desc : "Story",
        i1: 1 ,
        i2 : 2, 



} ,
{
screen : 2,
money : 30 ,
happiness : 70 ,
mcq : "What do you want to purchase?" ,
ans1:"Pent House",
ans2: "Shining car",
exp1 : "This will reduce your money",
exp2 : "This is a liability" ,
desc : "Next Purchase" ,
i1 : 0 ,
i2 : 0 
} ,
{
screen : 3,
money : 70 ,
happiness : 45 ,
mcq : "What do you want to Buy?" ,
ans1:"Liabilities",
ans2: "Assets",
exp1 : "This will make you poor",
exp2 : "This is will make you wealthy" ,
desc : "What are assets" ,
i1: 0,
i2: 0 ,

}
]
