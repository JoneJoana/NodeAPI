export const deleteGiftsController = (req,res) => {
    const {pos} = req.params;
    res.send(`Delete gift in position ${pos}`);
};