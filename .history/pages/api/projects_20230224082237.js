import dbConnect from '../../lib/dbConnect'
import Project from '../../models/UserModel'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const pets = await Project.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: projects })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
