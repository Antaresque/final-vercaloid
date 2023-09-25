import { displayData } from './../../lib/server/access_check';

export function load({ params }) {
    return {
        text: displayData()
    }
}