export const requiredField=value=>{
    debugger
    if (value) return undefined
    return 'Field is requered'
}

export const maxLength=(max)=>value=>{
    debugger
    if (value.length>max) return 'максимальное количество символов '+max
    return undefined
}