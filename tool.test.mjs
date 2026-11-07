import test from 'node:test';
import assert from 'node:assert/strict';
import {compute} from './tool.mjs';
test('sample behavior',()=>{const result=compute({"url": "https://example.com/search?q=code&page=2"});for(const [key,value] of Object.entries({"origin": "https://example.com", "path": "/search", "params": {"q": "code", "page": "2"}, "secure": true}))assert.deepStrictEqual(result[key],value,key)});
