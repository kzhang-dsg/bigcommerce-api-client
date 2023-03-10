#!/bin/bash

#git submodule update --remote

rm -rf ./src/model/generated/

for spec in bigcommerce-api-specs/reference/*;
do
    echo Generating $spec
    model_name=${spec%.*}
    npx openapi-typescript-codegen --input $spec --output ./src/model/generated/${model_name##*/} --useOptions --exportCore false --exportServices false --client axios
done;

echo Fixing the generated models
find ./src/model/generated/ -name '*.ts' -exec sed -i -e "s/        = '',/        BLANK = '',/g" {} \;
