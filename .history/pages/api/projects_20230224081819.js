export const getProjects = async (req, res) => {
    try {
        const users = await Project.find();
        res.json(users);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}