export class HttpProxy {

    public static async Get<T>(url: string): Promise<T> {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data: T = await response.json();

            return data;
        } catch (error) {
            console.error("Error fetching user data:", error);
            throw error;
        }
    }

    public static async Update(url: string, body: any): Promise<any> {
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
    
        } catch (error) {
            console.error("Error updating data:", error);
            throw error;
        }
    }

    public static  async Post<T>(url: string, body: any): Promise<T> {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
              });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data: T = await response.json();

            return data;
        } catch (error) {
            console.error("Error fetching user data:", error);
            throw error;
        }
    }

}