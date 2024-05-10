// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const HTTP_OK = 200;

export default function handler(req, res) {
	res.status(HTTP_OK).json({ name: 'John Doe', });
}
