import {ref} from "vue";

export function useAlert(startingVisibility = false){
    const alertIsVisible = ref(startingVisibility);

    function showAlert() {
        alertIsVisible.value = true;
    }
    function hideAlert() {
        alertIsVisible.value = false;
    }

    return [
        alertIsVisible,
        showAlert,
        hideAlert,
    ];
}
