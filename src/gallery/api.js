export async function list() {
  const res = await fetch('http://localhost:3002/paintings')
  return res.json()
}
