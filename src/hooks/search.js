import {computed, ref, watch} from "vue";

export function useSearch(items, name){
    const enteredSearchTerm = ref('');
    const activeSearchTerm = ref('');
    const availableItems = computed(function () {
        let users = [];
        if(items.value === null) return
        if (activeSearchTerm.value) {
            users = items.value.filter((usr) =>
                usr[name].toLowerCase().includes(activeSearchTerm.value.toLowerCase())
            );
        } else if (items.value) {
            users = items.value;
        }
        return users;
    });

    watch(enteredSearchTerm, function (newValue) {
        setTimeout(() => {
            if (newValue === enteredSearchTerm.value) {
                activeSearchTerm.value = newValue;
            }
        }, 300);
    });

    function updateSearch(val) {
        enteredSearchTerm.value = val;
    }

    return [
        availableItems,
        enteredSearchTerm,
        updateSearch
    ]

}
