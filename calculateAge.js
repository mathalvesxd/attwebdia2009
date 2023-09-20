export const calculateAge = (dateIn)=>{
 const date = new Date().getFullYear()
 const manipulateDate = parseInt(dateIn.split('/')[2])
 return date - manipulateDate
}
