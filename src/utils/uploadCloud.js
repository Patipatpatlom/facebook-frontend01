import axios from "axios"

export default async (file) => {
   const formData = new FormData()
   formData.append('file', file)
   formData.append('upload_preset', 'CC22-upload')
   const resp = await axios.post('https://api.cloudinary.com/v1_1/Patipat/image/upload', formData)
   console.log('uploadCloud : resp', resp.data)
   console.log(resp.data.secure_url)
   return resp.data.secure_url

}
