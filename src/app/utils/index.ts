
export const convertPercentValue = (value: number, ) => {
   return Number(value.toString().split('.')[1])
}

export const convertMoney = (value: any, lang?: string) => {
   return  new Intl.NumberFormat(lang ?? 'pt-BR', {
         minimumFractionDigits: 2,
         maximumFractionDigits: 2,
      }).format(value)

   
}
   
