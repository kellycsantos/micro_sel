'use client'

import { ResumeProps } from "../ResumeContainer";
import { convertPercentValue } from "@/app/utils";


export function useResume({ listItems }: ResumeProps) {

    const value = listItems.value
    const discountValue = convertPercentValue(listItems.discount)
    const calcvalueWithDiscount = () => {
        return (value - (value * listItems.discount)).toFixed(2)
    }
    const valueWithDiscount = calcvalueWithDiscount()


    return {
        discountValue,
        valueWithDiscount,
    }
}
