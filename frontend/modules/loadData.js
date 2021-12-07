export default async ({ $axios }, relativeUrl) =>
    await $axios
        .$get(
            `${$axios.defaults.baseURL}/${relativeUrl}`,
        )
        .catch(error => {
            if (process.browser) {
                window.alert(
                    'Не удается получить данные с сервера' +
                    ` из - за ошибки ${error}`,
                );
            }
        });
