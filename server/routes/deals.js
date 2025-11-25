const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Deal = require('../models/Deal');

// Get all deals
router.get('/', auth, async (req, res) => {
  try {
    const deals = await Deal.find({ createdBy: req.user._id })
      .populate('customer', 'name email')
      .populate('lead', 'name email')
      .sort({ createdAt: -1 });
    res.json(deals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

// Get single deal
router.get('/:id', auth, async (req, res) => {
  try {
    const deal = await Deal.findOne({
      _id: req.params.id,
      createdBy: req.user._id
    })
    .populate('customer', 'name email')
    .populate('lead', 'name email');

    if (!deal) {
      return res.status(404).json({ message: 'Negócio não encontrado' });
    }

    res.json(deal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

// Create deal
router.post('/', auth, async (req, res) => {
  try {
    const deal = new Deal({
      ...req.body,
      createdBy: req.user._id
    });

    await deal.save();
    res.status(201).json(deal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

// Update deal
router.put('/:id', auth, async (req, res) => {
  try {
    const deal = await Deal.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user._id },
      req.body,
      { new: true }
    );

    if (!deal) {
      return res.status(404).json({ message: 'Negócio não encontrado' });
    }

    res.json(deal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

// Delete deal
router.delete('/:id', auth, async (req, res) => {
  try {
    const deal = await Deal.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user._id
    });

    if (!deal) {
      return res.status(404).json({ message: 'Negócio não encontrado' });
    }

    res.json({ message: 'Negócio deletado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

module.exports = router;
