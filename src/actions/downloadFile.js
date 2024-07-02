import { BASE_URL, DOC_URL } from "../repository/Constants";

export const downloadFile = (file) => {

    const filePath = `${DOC_URL}/${file}`;
    const fileUrl = BASE_URL + filePath;

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = file;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
}