
interface Rank {
    id: number;
    name: string;
    img: string;
    prices: object;
}

export const calculateTotalPrice = ({
    currentRank,
    desireRank,
    currentNumOfRank,
    desireNumOfRank,
    ranksList} : {currentRank: number, desireRank: number, currentNumOfRank: number,desireNumOfRank: number, ranksList: Rank[]}
) => {
    const currentRankObject = ranksList.find((rank) => rank.id === currentRank);
    const desireRankObject = ranksList.find((rank) => rank.id === desireRank);


    if (currentRankObject && desireRankObject) {
        const currentPrices = currentRankObject.prices;
        const desirePrices = desireRankObject.prices;

        const currentNum = currentNumOfRank;
        const desireNum = desireNumOfRank;

        // Если текущий ранг и номер текущего ранга меньше или равны желаемому рангу и его номеру, возвращаем 0
        if (
            (desireRank < currentRank) ||
            (currentRank === desireRank && desireNum <= currentNum)
        ) {
            return 0;
        }

        let totalPrice = 0;

        // Если текущий ранг и желаемый ранг совпадают, считаем только для одного ранга
        if (currentRank === desireRank) {
            for (let i = currentNum; i <= desireNum; i++) {
                totalPrice += (currentPrices as Record<number, number>)[i];
            }
        } else {
            // Если ранги не совпадают, считаем от текущего ранга до максимального уровня и от минимального уровня желаемого ранга
            for (let i = currentNum; i <= Object.keys(currentPrices).length; i++) {
                totalPrice += (currentPrices as Record<number, number>)[i];
            }

            for (let j = currentRank + 1; j < desireRank; j++) {
                const intermediateRankObject = ranksList.find((rank) => rank.id === j);
                if (intermediateRankObject) {
                    for (let i = 1; i <= Object.keys(intermediateRankObject.prices).length; i++) {
                        totalPrice += (intermediateRankObject.prices as Record<number, number>)[i];
                    }
                }
            }

            for (let i = 1; i <= desireNum; i++) {
                totalPrice += (desirePrices as Record<number, number>)[i];
            }
        }

        return totalPrice;
    }

    return 0;
};