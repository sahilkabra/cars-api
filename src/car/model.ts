import { model, Document, Model, Schema } from 'mongoose';

export type Car = {
    colour?: string;
    id?: string; // this will be null for a car that has not been saved
    make?: string;
    model?: string;
    url?: string;
};

export type CarFilters = {
    colour?: string | string[];
    id?: string | string[];
    make?: string | string[];
    model?: string | string[];
};

export type CarSchema = Document &
    Car & {
        _id: number;
    };

const CarSchema: Schema = new Schema({
    colour: { type: String },
    make: { type: String },
    model: { type: String },
});

CarSchema.virtual('url').get(function(this: CarSchema) {
    return `/car/${this._id}`;
});

export const CarModel: Model<CarSchema> = model<CarSchema>('car', CarSchema);
