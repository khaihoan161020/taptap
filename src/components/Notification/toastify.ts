import { toast } from 'react-toastify'
const notification = (content: string) =>
    toast.success(content, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
    })

export default notification