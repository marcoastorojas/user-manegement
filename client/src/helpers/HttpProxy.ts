import axios, { AxiosResponse } from 'axios';

export class HttpProxy {
    public static async Get<T>(url: string): Promise<T> {
        try {
            const response: AxiosResponse<T> = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    }

    public static async Update<T>(url: string, body: any): Promise<T> {
        try {
            const response: AxiosResponse<T> = await axios.put(url, body, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            console.error("Error updating data:", error);
            throw error;
        }
    }

    public static async Post<T>(url: string, body: any): Promise<T> {
        try {
            const response: AxiosResponse<T> = await axios.post(url, body, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            console.error("Error posting data:", error);
            throw error;
        }
    }
}