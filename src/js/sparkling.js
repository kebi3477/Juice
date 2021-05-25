{
    window.onload = () => {
        const bubble = document.querySelectorAll('.particle__bubble');
        bubble.forEach((item, index) => {
            item.style.opacity = 0;
            setTimeout(() => {
                const itemX = item.transform.animVal[0]['matrix']['e'];
                const itemY = item.transform.animVal[0]['matrix']['f'];

                item.style.transition = `600ms ease-out`;
                item.style.transform = `translate(${itemX}px, ${itemY-20}px)`;
                item.style.opacity = 1;
            }, index * 200);
        });
    }
}