const API_URL = 'https://api.adviceslip.com/advice'

export async function GetAdvice() {

    try{
        const response = await fetch(API_URL)
        const data = await response.json()
        return data.slip
    }catch(error){
        return error
    }
}
