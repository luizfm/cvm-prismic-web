interface GetCardContentDirectionClassesProps {
    cardDirection: string;
    hasAfterLine: boolean;
    hasBeforeLine: boolean;
}

export const cardUtils = {
    getCardContentDirectionClasses(evenOrOdd: number, lastIndex: number): GetCardContentDirectionClassesProps {
        
        return {
            hasAfterLine: evenOrOdd + 1 !== lastIndex,
            hasBeforeLine: evenOrOdd !== 0,
            cardDirection: evenOrOdd % 2 ? 'left' : 'right'
        }
    }
}