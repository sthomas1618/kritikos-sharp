import React from 'react';
import { Router, Route, HistoryBase } from 'react-router';

export default <Route component={ Layout }>
    <Route path='/' components={{ body: Home }} />
</Route>;