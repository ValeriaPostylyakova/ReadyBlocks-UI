/**
 * Преобразует цвет из формата hex (#000, #fff, #123456) в формат rgba(r, g, b, a).
 *
 * @param {string} hexColor - Цвет в формате hex (например, "#000", "#fff", "#123456").
 * @param {number} alpha - Значение прозрачности (от 0 до 1).
 * @returns {string | null} Цвет в формате rgba(r, g, b, a) или null, если входной формат неверен.
 */
export function hexToRgba(hexColor: string, alpha: number): string | null {
	hexColor = hexColor.replace('#', '')

	if (hexColor.length !== 3 && hexColor.length !== 6) {
		return null
	}

	if (hexColor.length === 3) {
		hexColor =
			hexColor[0] +
			hexColor[0] +
			hexColor[1] +
			hexColor[1] +
			hexColor[2] +
			hexColor[2]
	}

	const r = parseInt(hexColor.substring(0, 2), 16)
	const g = parseInt(hexColor.substring(2, 4), 16)
	const b = parseInt(hexColor.substring(4, 6), 16)

	if (
		isNaN(r) ||
		isNaN(g) ||
		isNaN(b) ||
		r < 0 ||
		r > 255 ||
		g < 0 ||
		g > 255 ||
		b < 0 ||
		b > 255
	) {
		return null
	}

	if (alpha < 0 || alpha > 1) {
		return null
	}

	return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
