const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  status: {
    type: String,
    enum: ['pendente', 'em progresso', 'concluída', 'cancelada'],
    default: 'pendente'
  },
  priority: {
    type: String,
    enum: ['baixa', 'média', 'alta', 'urgente'],
    default: 'média'
  },
  dueDate: {
    type: Date
  },
  relatedTo: {
    type: String,
    enum: ['customer', 'lead', 'deal', 'none'],
    default: 'none'
  },
  relatedId: {
    type: mongoose.Schema.Types.ObjectId
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

taskSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Task', taskSchema);
