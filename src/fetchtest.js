export default async function fetchGetAllTasks() {
    try {
        // const response = await fetch('http://localhost:8080/api/v1/student');
        const response = await fetch('http://localhost:8080/login');
        const data = await response.json();
        if (response.status === 200) {
            console.log(data);
        } else {
            if (data.errors !== undefined) {
                alert(data.errors[0].msg);
                return;
            }
            alert(data.message);
        }
    } catch (error) {
        alert(error.message);
    }
}