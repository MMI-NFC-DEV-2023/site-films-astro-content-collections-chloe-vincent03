const formatter = new Intl.DateTimeFormat('fr-FR', {
    month: 'long',
    day: 'numeric',
});

export function formatDate(date: Date){
    return formatter.format(date);
}