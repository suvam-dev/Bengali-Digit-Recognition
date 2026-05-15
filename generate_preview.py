import numpy as np
import matplotlib.pyplot as plt

def generate_preview():
    data = np.load('dataset/training-images.npz')
    images = data['images']
    labels = data['labels']
    
    # Bengali digit labels
    bengali_digits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯']
    
    plt.figure(figsize=(15, 6))
    for i in range(10):
        # Find some random samples for each digit
        digit_indices = np.where(labels == i)[0]
        idx = digit_indices[np.random.randint(len(digit_indices))]
        
        plt.subplot(2, 5, i + 1)
        plt.imshow(images[idx])
        plt.title(f"Label {i}: {bengali_digits[i]}", fontsize=14)
        plt.axis('off')
    
    plt.suptitle("CMATERdb 3.1.1 Bengali Handwritten Digits Preview", fontsize=18, y=1.02)
    plt.tight_layout()
    plt.savefig('dataset_preview.png', bbox_inches='tight', dpi=150)
    print("Preview image saved as dataset_preview.png")

if __name__ == "__main__":
    generate_preview()
