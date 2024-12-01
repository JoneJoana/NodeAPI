export const putGiftsController = (req,res) => {
    const {pos} = req.params;
    res.send(`Updated gift with position ${pos}`);
};