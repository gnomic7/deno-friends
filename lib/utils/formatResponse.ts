export const formatResponse = ({status,payload}: {status: number, payload: any}) => ({success: [200,201].includes(status), payload})