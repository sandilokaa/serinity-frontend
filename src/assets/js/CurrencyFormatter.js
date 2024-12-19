const currencyCode = 'Rp '; // IDR or USD
const currencyPosition = 'left' // left or right
const maxFractionDigits = 2;
const thousandSeparator = '.';

function position(currencyPosition, value) {
    return currencyPosition === 'left' ? `${currencyCode}${value}` : `${value}${currencyCode}`;
}

const CurrencyFormatter = (value) => {
    var integer = 'integer';
    var result;

    if (value === 0 || value === null || value === undefined || value === '0' || typeof value === integer) {
        return position(currencyPosition, 0);
    }

    const currencyCheck = currencyCode.replace(/\s/g, '').toLowerCase();
    if (currencyCheck === 'idr' || currencyCheck === 'rp') {
        value = Math.ceil(value);
    }

    const valueSplit = String(value.toFixed(maxFractionDigits)).split(`${thousandSeparator}`);
    const firstvalue = valueSplit[0];
    const secondvalue = valueSplit[1];
    const valueReal = String(firstvalue).replace(/\B(?=(\d{3})+(?!\d))/g, `${thousandSeparator}`);

    if (Number(secondvalue) > 0) {
        result = position(currencyPosition, `${valueReal}${thousandSeparator}${secondvalue}`);
    } else {
        result = position(currencyPosition, `${valueReal}`);
    }

    return result;
}

export default CurrencyFormatter;