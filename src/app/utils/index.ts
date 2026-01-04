export const convertPercentValue = (value:number) => {
   return Number(value.toString().split('.')[1])
}