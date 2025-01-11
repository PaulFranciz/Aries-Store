// sanity/components/SKUInput.tsx
import { useState, useEffect } from 'react';
import { TextInput, Stack, Text } from '@sanity/ui';
import { generateSKU } from '../utils/skuGenerator';
import { set, unset } from 'sanity';

export const SKUInput = (props: any) => {
  const { type, value, onChange, readOnly } = props;
  const [sku, setSku] = useState(value);

  useEffect(() => {
    // Generate SKU on component mount if not already set
    if (!value) {
      const newSKU = generateSKU();
      setSku(newSKU);
      onChange(set(newSKU));
    }
  }, []);

  return (
    <Stack space={2}>
      <Text size={1}>SKU</Text>
      <TextInput
        value={sku}
        readOnly={true}
        disabled={readOnly}
      />
    </Stack>
  );
};
