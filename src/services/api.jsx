import axios from 'axios';

const API_URL = 'https://fet.app.fsd.rs/api'

export const apiCall = (method, url) => {
    return axios[method](`${API_URL}${url}`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NjQ2MjQzMTQsImV4cCI6MTY2NTQ4ODMxNCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoic2xhdmtvdi5tb2IxQGdtYWlsLmNvbSJ9.3Y9Ektn4UNwhx2lPvktVIcx9CZzshiCvmT2JtvNvfIf6YjQWAYsJxEqltfKSunNK4BlQmOxmD3imN0jIYaJZuNQopB-s4sANllggtqUFDRJnhsmoHlsDkGzmw5n9vm6co-7DwaqXY3oLFQRwf2W2rrrVh3wj4GoRM8Ii70jccjWBiQMtm6MdVUPXbIDfC6gpO6RnBGxWKQ8526a95dytwSPWw8I-7km75IcmjivIooEiUoEVpM5oeXD5-loihiCJ4A5X0iL1wEjnOH7JhTrQpwM9cBsd2F5noCPpAcTL-39AWU6w1MciFIfYNQZPKrMTzrbyXPrRo9uMxN6X0TEixg`
            },
        })
}