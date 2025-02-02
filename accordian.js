const toggle = (() => {
    let tog = null;

    return function (e) {
        if (tog === e) {
            e.checked = false;
            tog = null;
        }
        else {
            tog = e;
        }
    }
}
)();