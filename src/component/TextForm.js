import React from 'react'
// rfc

export default function TextForm() {
    return (
        <div>
            <h1>Enter the text to analysis</h1>
            {/* div == is container screen ke center me box banta hai */}
            <div class="mb-3">
                <label for="Mybox" class="form-label">Example textarea</label>
                <textarea class="form-control" id="Mybox" rows="8"></textarea>
            </div>
        </div>
    )
}
