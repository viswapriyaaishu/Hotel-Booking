export const errHandler=(status,msg)=>{
    const err=new Error()
    err.status=status
    err.message=msg

    return err
}