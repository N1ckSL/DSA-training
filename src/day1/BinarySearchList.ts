export default function bs_list(haystack: number[], needle: number): boolean {
    // low
    // high
    // mid
    // mid = low + (high - low) / 2
    // val = haystack[mid]

    let low = 0;
    let high = haystack.length;

    while (low < high) {
        // Conditions:
        // val === needle => return true
        // val > mid => low = mid + 1
        // val < mid => high = mid
        // KEEP IN MIND: [low, hight) => low <= x < high

        const mid = Math.floor(low + (high - low) / 2);
        const val = haystack[mid];

        if (val === needle) {
            return true;
        } else if (val > needle) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return false;
}
