export default function nowTime(요청,응답){
    
    return 응답.status(200).json(new Date())
}