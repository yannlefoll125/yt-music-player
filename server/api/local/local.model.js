'use strict';

import mongoose from 'mongoose';

var LocalSchema = new mongoose.Schema({
  name: String,
  path: String
});

export default mongoose.model('Local', LocalSchema);
