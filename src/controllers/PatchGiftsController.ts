export const patchGiftsController = (req,res) => {
    const {pos} = req.params;
    res.send(`Modified gift in position ${pos}`);
};