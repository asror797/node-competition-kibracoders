import IBase from "./base"
export interface IBook extends IBase {
   masterId: string
   clientId: string
   startDate: string
   endDate: string
   status: string
}