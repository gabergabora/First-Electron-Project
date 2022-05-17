function handleEnter(event) {
    const btn = document.querySelector('#btn');
    if (event.key === "Enter") {
        if(event.target !== btn){
            console.log(event.target);
            event.preventDefault();
            const form = document.getElementById('new-sale');
            const index = [...form].indexOf(event.target);
            form.elements[index + 1].focus();
        }
    }
};

addEventListener('load', () => {
    const dateObj = new Date();
    let day = dateObj.getUTCDate().toString();
    let month = (dateObj.getUTCMonth() + 1).toString();
    const year = dateObj.getUTCFullYear().toString();

    day = day.length == 2 ? day : "0" + day;
    month = month.length == 2 ? month : "0" + month;

    const date = day + "/" + month + "/" + year;
    
    document.getElementById('date').value = date;
});