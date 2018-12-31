const Order = {
  NONE: 'NONE',
  ASC: 'ASC',
  DESC: 'DESC'
}

function getIconForOrder (order) {
  switch (order) {
    case Order.ASC:
      return 'sort-asc'
    case Order.DESC:
      return 'sort-desc'
    default:
      return 'sort-desc'
  }
}

function getIconForStatus (status) {
  switch (status) {
    case 'OK':
    case 'ok':
      return 'tick-circle'
    default:
      return 'error'
  }
}

function getColorForStatus (status) {
  switch (status) {
    case 'OK':
    case 'ok':
      return 'success'
    default:
      return 'danger'
  }
}

function formatFloat (val, fixed) {
  if (!Number.isInteger(fixed)) {
    fixed = 2
  }

  return Number.parseFloat(val).toFixed(fixed)
}

function formatNano (val) {
  return Number.parseFloat(val / 1000000).toFixed(2)
}

function pretty (value) {
  let v = value
  if (typeof v === 'string') {
    v = JSON.parse(value)
  }
  return JSON.stringify(v, null, 2)
}

function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function toLocaleString (date) {
  if (date instanceof Date) {
    return date.toLocaleString
  }

  const dateObj = new Date(date + '')
  return dateObj.toLocaleString()
}

module.exports = {
  getIconForOrder,
  getIconForStatus,
  getColorForStatus,
  Order,
  formatFloat,
  formatNano,
  pretty,
  getRandomInt,
  toLocaleString
}
